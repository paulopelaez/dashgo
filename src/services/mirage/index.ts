import {
  ActiveModelSerializer,
  createServer,
  Factory,
  Model,
  Response,
} from "miragejs";
import faker from "faker";

type User = {
  name: string;
  avatar: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i) {
          //return `Pelaez ${i + 1}`;
          return `${faker.name.firstName()} ${faker.name.lastName()}`;
        },
        avatar(i) {
          return `https://i.pravatar.cc/50?img=${i > 70 ? 70 : i}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList("user", 8);
    },

    routes() {
      this.namespace = "api";
      this.timing = 1200;

      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all("user")).users.slice(
          pageStart,
          pageEnd
        );

        return new Response(
          200,
          {
            "x-total-count": String(total),
            "x-pageStart": String(pageStart),
            "x-pageEnd": String(pageEnd),
          },
          { users }
        );
      });
      this.get("/users/:id");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}

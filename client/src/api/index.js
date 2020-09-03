import dotenv from "dotenv";
dotenv.config();

const baseUrl = process.env.REACT_APP_BASE_URL;

// Factory Function
export default (route) => ({
  async create(newDBCollectionItem) {
    // We are here in banda.com
    // We are requesting from banda.com to: a server route
    // server.com/admins/admins/whaterver/as/mcuch
    const res = await fetch(`${baseUrl}${route}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDBCollectionItem),
    });

    return res.json();
  },

  show(id) {},

  getAll() {
    console.log("triyng to get all", route);
  },

  update(payload, id) {},

  async delete() {
    const res = await fetch(`${baseUrl}${route}/delete`, {
      method: "DELETE",
    });
    return await res.json();
  },
});

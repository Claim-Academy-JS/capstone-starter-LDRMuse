import dotenv from "dotenv";
dotenv.config();

const baseUrl = process.env.REACT_APP_BASE_URL;

// Factory Function
export default (route) => ({
  async create(newDBCollectionItem) {
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
  //TODO add entry to client
  async update(nestedItem) {
    const res = await fetch(`${baseUrl}${route}/chart-entry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nestedItem),
    });

    return res.json();
  },

  async delete() {
    const res = await fetch(`${baseUrl}${route}/delete`, {
      method: "DELETE",
    });
    return await res.json();
  },
});

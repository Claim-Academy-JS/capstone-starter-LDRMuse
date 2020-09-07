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

  async show(id) {
    try {
      const res = await fetch(`${baseUrl}${route}/${id}`);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  },

  async update(chart, email) {
    try {
      const res = await fetch(`${baseUrl}${route}/chart-entry`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chart, email }),
      });
      if (res.status > 400) {
        throw new Error("Unable to fetch from server");
      }
      return await res.json();
    } catch (error) {
      throw error;
    }
  },

  async delete() {
    const res = await fetch(`${baseUrl}${route}/delete`, {
      method: "DELETE",
    });
    return await res.json();
  },
});

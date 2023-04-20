export default {
  props: [
    "id",
    "image",
    "name",
    "is-active",
    "birth-year",
    "connections",
    "completed-credits",
    "active-semester-count",
  ],

  methods: {
    async deleteStudent() {
      this.$parent.students.splice(this.index, 1);
      // API hívás
      await fetch(`https://practiceapi.nikprog.hu/Student/${this.id}`, {
        method: "delete",
      });
    },
  },

  computed: {
    index() {
      return this.$parent.students.findIndex((s) => s.id === this.id);
    },

    avatarBorder() {
      return this.isActive ? "border-success" : "border-danger";
    },

    nameColor() {
      return this.isActive ? "text-success" : "text-danger";
    },
  },

  template: `
    <tr 
      class="table-row m-3"
    >
        <td>{{ index }}</td>
        <td><img v-bind:src="image" style="width: 30px; height: 30px; border-radius: 30px;" class="border " :class="avatarBorder"></td>
        <td v-bind:class="nameColor" >{{ name }}</td>
        <td>{{ id }}</td>
        <td>{{ birthYear }}</td>
        <td>{{ connections }}</td>
        <td>{{ completedCredits }}</td>
        <td>{{ activeSemesterCount }}</td>
        <td>
            <button
                type="button"
                class="btn btn-danger m-2"
                @click="deleteStudent"
            >
                Delete
            </button>
        </td>
    </tr>
    `,
};

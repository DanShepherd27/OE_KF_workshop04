export default {
  props: [],

  data() {
    return {
      newStudentJSON: "",
    };
  },

  methods: {
    async createStudent() {
      // API hívás
      const res = await fetch("https://practiceapi.nikprog.hu/Student", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: this.newStudentJSON,
      });
      const data = await res.json();
      this.$parent.students.unshift(data);
    },
  },

  computed: {},

  template: `
    <form class="bg-warning p-3">
        <textarea
            class="form-control mb-3"
            placeholder="Student JSON"
            v-model="newStudentJSON"
        />
        <button
        type="button"
        class="btn btn-success"
        @click="createStudent"
        >
        Create Student
        </button>
    </form>
    `,
};

/*

{
    "name": "JD - Gipsz Jakab",
    "isActive": true,
    "birthYear": 2000,
    "connections": 13,
    "completedCredits": 155,
    "activeSemesterCount": 6,
    "image": "https://picsum.photos/400"
}

*/

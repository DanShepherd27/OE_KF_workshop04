export default {
  props: ["student"],

  methods: {
    async updateStudent() {
      const index = this.$parent.students.findIndex(
        (s) => s.id === this.student.id
      );
      this.$parent.students[index] = this.student;
      // API hívás
    },
  },

  computed: {},

  template: `
    <form class="bg-primary p-3">
        <input
        disabled
        type="text"
        class="form-control mb-3"
        placeholder="Student ID"
        id="studentId"
        :value="this.student.id"
        />
        <input
        type="text"
        class="form-control mb-3"
        placeholder="Name"
        id="studentName"
        :value="this.student.name"
        />
        <input
        type="text"
        class="form-control mb-3"
        placeholder="Birth year"
        id="studentBirthYear"
        :value="this.student.birthYear"
        />
        <input
        type="text"
        class="form-control mb-3"
        placeholder="Completed credits"
        id="studentCompletedCredits"
        :value="this.student.completedCredits"
        />
        <input
        type="text"
        class="form-control mb-3"
        placeholder="Semester count"
        id="studentSemesterCount"
        :value="this.student.activeSemesterCount"
        />
        <input
        type="text"
        class="form-control mb-3"
        placeholder="Connections"
        id="studentConnections"
        :value="this.student.connections"
        />
        <input
        type="text"
        class="form-control mb-3"
        placeholder="Image"
        id="studentImage"
        :value="this.student.image"
        />
        <div class="form-check mb-3">
        <input
            class="form-check-input"
            type="checkbox"
            id="studentIsActive"
            :checked="this.student.isActive"
        />
        <label class="form-check-label" for="studentIsActive">
            Is active
        </label>
        </div>
        <button
        type="button"
        class="btn btn-warning"
        id="update-student-button"
        @click="updateStudent"
        >
        Update Student
        </button>
    </form>
      `,
};

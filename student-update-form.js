export default {
  props: ["student"],

  data() {
    return {
      tempStudent: {},
    };
  },

  methods: {
    async updateStudent() {
      console.log(this.tempStudent);

      this.$parent.students[this.index] = {
        ...this.student,
        ...this.tempStudent,
      };
      console.log(this.$parent.students[this.index]);
      // API hívás
    },
  },

  computed: {
    index() {
      return this.$parent.students.findIndex((s) => s.id === this.student.id);
    },
  },

  template: `
    <form class="bg-primary p-3">
        <input
            disabled
            type="text"
            class="form-control mb-3"
            placeholder="Student ID"
            id="studentId"
            :value="student.id"
            @input="event => tempStudent.id = event.target.value"
        />
        <input
            type="text"
            class="form-control mb-3"
            placeholder="Name"
            id="studentName"
            :value="student.name"
            @input="event => tempStudent.name = event.target.value"
        />
        <input
            type="text"
            class="form-control mb-3"
            placeholder="Birth year"
            id="studentBirthYear"
            :value="student.birthYear"
            @input="event => tempStudent.birthYear = event.target.value"
        />
        <input
            type="text"
            class="form-control mb-3"
            placeholder="Completed credits"
            id="studentCompletedCredits"
            :value="student.completedCredits"
            @input="event => tempStudent.completedCredits = event.target.value"
        />
        <input
            type="text"
            class="form-control mb-3"
            placeholder="Semester count"
            id="studentSemesterCount"
            :value="student.activeSemesterCount"
            @input="event => tempStudent.activeSemesterCount = event.target.value"
        />
        <input
            type="text"
            class="form-control mb-3"
            placeholder="Connections"
            id="studentConnections"
            :value="student.connections"
            @input="event => tempStudent.connections = event.target.value"
        />
        <input
            type="text"
            class="form-control mb-3"
            placeholder="Image"
            id="studentImage"
            :value="student.image"
            @input="event => tempStudent.image = event.target.value"
        />
        <div class="form-check mb-3">
        <input
            class="form-check-input"
            type="checkbox"
            id="studentIsActive"
            :checked="student.isActive"
            @input="event => tempStudent.isActive = event.target.checked"
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

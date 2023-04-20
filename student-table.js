import StudentItem from "./student-item.js";

export default {
  props: ["students"],
  methods: {
    studentClickHandler(student) {
      console.log(student);
      this.$parent.selectedStudent = student;
    },
  },

  computed: {},

  components: {
    StudentItem,
  },

  template: `
    <table class="table mt-3">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Avatar</th>
        <th scope="col">Name</th>
        <th scope="col">Id</th>
        <th scope="col">BirthYear</th>
        <th scope="col">Connections</th>
        <th scope="col">CompletedCredits</th>
        <th scope="col">ActiveSemesterCount</th>
        <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        <StudentItem
        v-for="student in students"
        :id="student.id"
        :image="student.image"
        :name="student.name"
        :is-active="student.isActive"
        :birth-year="student.birthYear"
        :connections="student.connections"
        :completed-credits="student.completedCredits"
        :active-semester-count="student.activeSemesterCount"
        @click="studentClickHandler(student)"
        >
        </StudentItem>
    </tbody>
    </table>
      `,
};

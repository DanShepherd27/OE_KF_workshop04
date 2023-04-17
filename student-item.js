export default {
    props: [ 'index', 'id', 'image', 'name', 'isActive', 'birthYear', 'connections', 'completedCredits', 'activeSemesterCount' ],

    methods: {
        deleteStudent() {
            this.$parent.students.splice(this.index, 1);
            // API hívás
        }
    },

    computed: {
        avatarBorder() {
            return this.isActive ? 'border-success' : 'border-danger';
        }
    },

    template: `
    <tr
    >
        <td>{{index}}</td>
        <td><img v-bind:src="image" style="width: 30px; height: 30px; border-radius: 30px;" class="border " v-bind:class="avatarBorder"></td>
        <td>{{name}}</td>
        <td>{{id}}</td>
        <td>{{isActive}}</td>
        <td>{{birthYear}}</td>
        <td>{{connections}}</td>
        <td>{{completedCredits}}</td>
        <td>{{activeSemesterCount}}</td>
    </tr>
    `
}
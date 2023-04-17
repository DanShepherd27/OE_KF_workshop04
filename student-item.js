export default {
    props: ['id', 'image', 'name', 'isActive', 'birthYear', 'connections', 'completedCredits', 'activeSemesterCount' ],

    methods: {
        deleteStudent() {
            this.$parent.students.splice(this.$parent.students.indexOf(this.$parent.students.find( s => s.id === this.id)), 1);
            // API hívás
        }
    },

    computed: {
        index() {
            return this.$parent.students.indexOf(this.$parent.students.find( s => s.id === this.id));
        }, 

        avatarBorder() {
            return this.isActive ? 'border-success' : 'border-danger';
        },

        nameColor() {
            return this.isActive ? 'text-success' : 'text-danger';
        }
    },

    template: `
    <tr class="m-3"
    >
        <td>{{ index }}</td>
        <td><img v-bind:src="image" style="width: 30px; height: 30px; border-radius: 30px;" class="border " v-bind:class="avatarBorder"></td>
        <td v-bind:class="nameColor" >{{ name }}</td>
        <td>{{ id }}</td>
        <td>{{ isActive }}</td>
        <td>{{ birthYear }}</td>
        <td>{{ connections }}</td>
        <td>{{ completedCredits }}</td>
        <td>{{ activeSemesterCount }}</td>
        <td>
            <button
                type="button"
                class="btn btn-danger m-2"
                @click="deleteStudent()"
            >
                Delete
            </button>
        </td>
    </tr>
    `
}
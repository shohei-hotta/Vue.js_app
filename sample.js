var vm = new Vue ({
  el: "#app",
  data: {
    name: "Bob",
    course: "Webエンジニアコース",
    coursePeriod: "2020年03月期",
    defaultNextId: 4,
    students: [
      { id: 1, name: "野呂浩良", course: "機械学習コース", coursePeriod: "2019年01月期" },
      { id: 2, name: "富永修司", course: "Webエンジニアコース", coursePeriod: "2017年11月期" },
      { id: 3, name: "斉藤一起", course: "Webエンジニアコース", coursePeriod: "2017年11月期" }
    ]
  },
  methods: {
    addStudent: function () {
      vm.students.push({ id: vm.defaultNextId++, name: vm.name, course: vm.course, coursePeriod: vm.coursePeriod })
      vm.name = ""
      vm.course = ""
      vm.coursePeriod = ""
    }
  }
})
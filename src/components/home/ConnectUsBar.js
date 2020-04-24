import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'
import firebase from 'firebase'
 
export default {
  extends: Bar,
  data: function () {
    return {
        counts: [0, 0, 0, 0, 0, 0, 0],
        datacollection: {
            labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            datasets: [{
                label: "Number of Posts",
                backgroundColor: ["#A3D6D4", "#F1E9CB", "#C2D5A7", "#B0ABCA", "#E2A9BE", "#E1C6AC"],
                data: []
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Number of Posts by Day'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
      var user = firebase.auth().currentUser;
      var email = user.email;
      var id;

      database.collection("Users").where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(doc => {
          id = doc.id
          //console.log(id)
        })
      })

      database.collection('Reviews').get().then(querySnapShot => {
        querySnapShot.forEach(doc => {
          console.log(id)
          var item = doc.data()

          if (item["user_id"] == id) {
          //add in login functions
          //this.datacollection.labels.push(doc.data().Day)

          var datetime = item['created_at'].toDate();
          var day = datetime.getDay();
          var count = this.counts[day] + 1;
          this.counts[day] = count;
          //console.log(this.counts)
          //this.datacollection.datasets[0].data.push(doc.data().No)
          //console.log(doc.data())
        }
        })
        for (let i = 0; i < this.counts.length; i++) {
          this.datacollection.datasets[0].data.push(this.counts[i])
        }
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}


import { Pie } from 'vue-chartjs'
import database from '../firebase.js'
 
export default {
  extends: Pie,
  data: function () {
    return {
        datacollection: {
            labels: ['Upvote', 'Downvote'],
            datasets: [{
                label: "Number of Upvotes versus Downvotes",
                backgroundColor: ["#9edeaf", "#de9e9e"],
                data: []
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Upvotes vs Downvotes'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () { 
      //var user = firebase.auth().currentUser;
      //var email = user.email;

      database.collection('Reviews').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
          if (doc.data().email == "johndoe@email.com") {
            //this.datacollection.labels.push(doc.data().Day)
            this.datacollection.datasets[0].data.push(doc.data().upvotes)
            this.datacollection.datasets[0].data.push(doc.data().downvotes)
            console.log(doc.data())
          }
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}


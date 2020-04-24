import { Pie } from 'vue-chartjs'
import database from '../../firebase.js'
//import firebase from 'firebase'
 
export default {
  extends: Pie,
  data: function () {
    return {
        counts: [0, 0],
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
          //if (doc.data().email == email) {
            var item = doc.data();
            var up = item.upvotes;
            var down = item.downvotes;
            this.counts[0] += up;
            this.counts[1] += down;
            
            console.log(this.counts)
          //}
        })

        for (let i = 0; i < this.counts.length; i++) {
          //this.datacollection.labels.push(doc.data().Day)
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


import { Bar } from 'vue-chartjs'
// import the component - chart you need

export default {
    extends: Bar,
        props: {
        graphOpenAverageTorque: {
                type: Array,
                default: [1,23,47]
            },
        graphOpenLastTorque: {
                type: Array,
                default: [1,23,47]
            }
    },
    mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Average open torque',
                backgroundColor: '#3c8dbc',
                data: graphOpenAverageTorque
            },
            {
                label: 'Last open torque',
                backgroundColor: '#3c8dbc',
                data: graphOpenLastTorque
            },
            {
                label: 'Forecast open torque',
                backgroundColor: '#3c8dbc',
                data: [1,2,3,54,5]
            }
        ]
    })
}
}
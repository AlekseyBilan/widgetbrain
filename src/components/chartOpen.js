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
            },
        graphOpenLabels: {
                type: Array,
                default: [1,23,47]
            }
    },
    mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
        labels: this.graphOpenLabels,
        datasets: [
            {
                label: 'Average open torque',
                backgroundColor: '#ccc',
                data: this.graphOpenAverageTorque
            },
            {
                label: 'Last open torque',
                backgroundColor: '#777',
                data: this.graphOpenLastTorque
            },
            {
                label: 'Forecast open torque',
                backgroundColor: '#c3c3c3',
                data: [1,2,3,54,5]
            }
        ]
    })
}
}
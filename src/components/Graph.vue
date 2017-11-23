<template>
    <div class="graph">
        <ul>
            <li v-for="data in graphData">
                {{data.Direction}}
            </li>
        </ul>
        <chartOpen :graphOpenLabels="graphOpenLabels" :graphOpenAverageTorque="graphOpenAverageTorque" :graphOpenLastTorque="graphOpenLastTorque"></chartOpen>
        <!--<chartClose :chartData="graphOpen"></chartOpen>-->
    </div>
</template>

<script>
    import chartOpen from 'chartOpen'
    //import chartClose from 'chartClose'
    export default {
        name: 'Graph',
        props: {
            profile: {
                type: String,
                default: '0'
            }
        },
        components: {
            chartOpen
        },
        data () {
            return {
                graphData = [
                    {"Direction":"Close","Position":1,"AverageTorque":69,"LastTorque":69,"AssetId":"","Profile":1,"id":"5750496c224bf61c268c8887"},
                    {"Direction":"Open","Position":0,"AverageTorque":29,"LastTorque":29,"AssetId":"","Profile":1,"id":"5750496c224bf61c268c8888"},{"Direction":"Close","Position":2,"AverageTorque":7,"LastTorque":7,"AssetId":"","Profile":1,"id":"5750496d224bf61c268c888a"},
                    {"Direction":"Open","Position":1,"AverageTorque":0,"LastTorque":0,"AssetId":"","Profile":1,"id":"5750496d224bf61c268c888b"}
                ],
                graphClose = [],
                graphCloseLastTorque = [],
                graphCloseAverageTorque = [],
                graphCloseLabels = [],
                graphOpen = [], 
                graphOpenLastTorque = [],
                graphOpenAverageTorque= [],
                graphOpenLabel = []
            }
        },
        created: function() {
            this.$http.get('http://wb-predictivemaintenance-api.prsp7vkew2.eu-central-1.elasticbeanstalk.com/api/TorqueValues')
                .then(function(response){
                var obj = response.data, current;

                for(var key in obj){
                    current = obj[key];
                    if(current.Profile == this.profile){
                        if(current.Direction == 'Close'){
                            this.graphClose.push(current);
                            this.graphCloseLastTorque.push(current.LastTorque),
                            this.graphCloseAverageTorque.push(current.AverageTorque),
                            this.graphCloseLabels.push(current.Position)
                        }else{
                            this.graphOpen.push(current);
                            this.graphOpenLastTorque.push(current.LastTorque),
                            this.graphOpenAverageTorque.push(current.AverageTorque),
                            this.graphOpenLabels.push(current.Position)
                        }
                    }
                }
                console.log('data = ',this.graphOpen);
            });
        }
    }
</script>

<style>
</style>

add another endpoint with a POST request method to our hello-world-project
test everything using sls local invokes
sls invoke local --function hello-world
explain about plugins
talk about local envs and limitations in serverless
install sls offline plugin and show how it works
npm install serverless-offline --save-dev
add plugin in sls.yaml
    
test everything using plugin
sls plugin list
show the different plugins community provides
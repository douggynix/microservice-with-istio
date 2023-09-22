# microservice-with-istio
A demo project with a React frontend that connects to two independent backend microservices targetted to be deployed in a service mesh using istio on a Kubernetes cluster

![image](https://github.com/douggynix/microservice-with-istio/assets/11457752/7a2302d8-cdb3-4263-b854-b4a66bbc8777)

A frontend is set to communicate to those 2 backends and will query metadata from each of them. At first, we use Istio Mesh to handle traffic routing and be able to create a service mesh without having to deal with coding as shown below. All of those are being taken care of by istio config in the kubernetes cluster with different kubernetes resources written in yaml files 

![image](https://github.com/douggynix/microservice-with-istio/assets/11457752/49244e66-a76f-4b03-bbfd-a2b32fbe111f)





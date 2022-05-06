##!/usr/bin/env bash

kubectl apply -f ./kubernetes
minikube service front-end --url
minikube service api --url
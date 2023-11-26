# Harbor.ed

## Inspiration
✨ In a world that can sometimes feel overwhelmingly negative, we wanted to create an oasis of positivity. The inspiration for *harbor.ed * comes from the calming effect that the ocean and its inhabitants have on many people. As students, we often crave for the need to be cared for, and of course, habored. We envisioned a digital sanctuary where individuals could find comfort and companionship in the form of sea creatures, each with a unique personality designed to uplift and support. Especially to international students who may not have a chance to see their family for months at a time, it is often to feel lonely or sad with no one there to watch out for your feelings - Harbour.ed is your safe space:

## What it does
🌊 Harbor.ed is an interactive online space where individuals feeling down or distressed can find solace and encouragement. Users visit our website and choose from a variety of sea creatures to converse with. These friendly fishes engage in supportive dialogue, offering words of encouragement. Utilizing advanced emotion detection technology, our platform identifies when a user is particularly sad and prompts the sea creatures to provide extra comfort, ensuring a personalized and empathetic experience.

## How we built it
✨ Our project harnesses a diverse tech stack, as illustrated in the architecture diagram. The client-side is supported by technologies like React, Sass, and JavaScript, ensuring a seamless and engaging user interface. The server-side is bolstered by Google Cloud and GoDaddy, providing robust and scalable hosting solutions. We've leveraged MongoDB Atlas for our database needs, ensuring efficient data management. The heart of Harbor.ed's empathetic interaction comes from the OpenCV and AWS-powered emotion detection and the innovative use of cohere APIs, which allow our sea creatures to respond intelligently to users' emotional states.

## Challenges we ran into
🌊 Integrating the emotion detection technology with real-time chat functionality posed a significant challenge. Ensuring user privacy while processing emotional data required careful planning and execution. Moreover, creating a diverse range of sea creature personalities that could appeal to different users was a complex task that demanded creativity and an understanding of psychological support principles. There were many things we ran into during both development and deployment, and being able to ship this project on time is a big accomplishment for us.

## Accomplishments that we're proud of
✨ We are particularly proud of creating an environment that not only recognizes emotions but responds in a comforting and supportive manner. Our success in integrating various technologies to create a seamless user experience is a testament to our team's dedication and technical prowess.

## What we learned
🌊 Throughout the development of harbor.ed, we learned the importance of interdisciplinary collaboration, combining elements of psychology, technology, and design. We also gained valuable insights into the technical aspects of real-time emotion detection and chatbot development. Many technologies like Langchain and OpenCV were also first time uses for some of our members, and seeing everything come together is extremely rewarding.

## What's next
✨ The future of harbor.ed is bright and bustling with potential. We plan to expand the range of sea creatures and personalities, improve our emotion detection algorithms for greater accuracy, and explore partnerships with mental health professionals to refine the support our digital creatures can provide. Our ultimate goal is to create a global community where everyone has access to a virtual sea of support.

Learn more on our [Devpost](https://devpost.com/software/harbor-ed)!

## Langchain (RAG)

We used Langchain to integrate Cohere's LLM and Embeddings with our application. To supplement our application with a customized knowledge base, we used MongoDB Atlas as a vector database. We then wrote a microserver with FastAPI.

### Configure MongoDB Atlas (Vector Search)
```
# install dependencies
pip install -U langchain-cli

cd rag-mongo
python setup.py install

# seed vector db (Mongo Atlas)
source setup-exports.sh 
python ingest.py

# build docker image
docker build . -t rag

```

Add a *default* search index for **Collection** (using JSON editor)l:
```
 {
   "mappings": {
     "dynamic": true,
     "fields": {
       "embedding": {
         "dimensions": 1536,
         "similarity": "cosine",
         "type": "knnVector"
       }
     }
   }
 }
 ```


### API Development (FastAPI)
```
cd langchain
source setup-exports.sh 
python app/server.py
```



## Repo Structure
<!-- Table -->
| Directory | Description |
| --- | --- |
| `langchain/rag-mongo` | Langchain RAG library using Cohere's LLM/Embeddings and MongoDB |
| `langchain/ingest.py` | Ingests data into MongoDB Atlas |
| `langchain/app`       | FastAPI for our application |
| `server`              | Python backend for Web UI with facial recognization capabilities |
| `ui`                  | Frontend Web UI using React and Three.js |


// set up a realtime listener
// fetch documents and when there is a change fetch documents again

import { ref, watchEffect } from 'vue'

// firebase imports
import { db } from '../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore'

const getCollection = (c) => {
  const documents = ref(null)

  // collection reference
  let collectionRef = collection(db, c)

  const unsubscribe = onSnapshot(collectionRef, snapshot => {
    let results = []
    snapshot.docs.forEach(doc => {
      results.push({ ...doc.data(), id: doc.id })
    })
    
    // update values
    documents.value = results
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsubscribe());
  });

  return { documents }
}

export default getCollection
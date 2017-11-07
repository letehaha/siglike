import { Router } from 'express'
import request from 'request'
import cache from 'memory-cache'

const router = Router()
const minute = 60000 // 60 000 ms

function search (nameKey, myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (parseInt(myArray[i].id) === nameKey) {
      return myArray[i]
    }
  }
}

/* GET providers listing. */
router.get('/providers', (req, res, next) => {
  if (cache.get('providers')) {
    res.json(cache.get('providers'))
  } else {
    request.get('https://siglike-b0523.firebaseio.com/providers.json', function (error, response, body) {
      if (!error && response.statusCode === 200) {
        res.json(body)
        cache.put('providers', body, minute)
      }
    })
  }
})

/* GET provider by ID. */
router.get('/providers/:id', (req, res, next) => {
  const id = parseInt(req.params.id)
  if (cache.get('providers')) {
    res.json(search(parseInt(id), JSON.parse(cache.get('providers'))))
  } else {
    request.get('https://siglike-b0523.firebaseio.com/providers.json', function (error, response, body) {
      if (!error && response.statusCode === 200) {
        if (id >= 0) {
          res.json(search(parseInt(id), JSON.parse(body)))
        } else {
          res.sendStatus(404)
        }
      }
    })
  }
})

export default router

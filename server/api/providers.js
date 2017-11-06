import { Router } from 'express'
import request from 'request'

const router = Router()

function search (nameKey, myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (parseInt(myArray[i].id) === nameKey) {
      return myArray[i]
    }
  }
}

/* GET providers listing. */
router.get('/providers', function (req, res, next) {
  request.get('https://siglike-b0523.firebaseio.com/.json', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.json(body)
    }
  })
})

/* GET provider by ID. */
router.get('/providers/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  request.get('https://siglike-b0523.firebaseio.com/.json', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      if (id >= 0) {
        body = JSON.parse(body)
        res.json(search(parseInt(id), body.providers))
      } else {
        res.sendStatus(404)
      }
    }
  })
})

export default router

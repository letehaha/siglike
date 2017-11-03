import { Router } from 'express'

const router = Router()

// Mock Users
const providers = [
      {
        id: 0,
        name: 'John',
        s_name: 'Williber',
        reference: 'Dr.',
        user_avatar: 'users/user-doctor.jpg',
        profession: 'Radiologist',
        location: 'Akbarnagar',
        user_info: {
          basic_info: {
            title: 'Basic Info',
            items: [
              { icon: 'my_profile', title: 'Facility Name', info: 'Sadbhav Hospital' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          experiance: {
            title: 'Work and Education',
            items: [
              { icon: 'my_profile', title: 'Education', info: 'MBBS , MD (Medicine)' },
              { icon: 'my_profile', title: 'Specialty', info: 'Radiologist' },
              { icon: 'my_profile', title: 'Experiance', info: '30 Year' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          address: {
            title: 'Address',
            items: [
              { icon: 'my_profile', title: 'Address', info: '156 – O Block' },
              { icon: 'my_profile', title: 'Area', info: 'Patel State' },
              { icon: 'my_profile', title: 'City', info: 'Naranpura' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          persons: {
            title: 'Contact Persons',
            items: [
              { icon: 'my_profile', title: 'Reception', info: '+91 021 1234567' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          contact: {
            title: 'Personal Contact',
            items: [
              { icon: 'my_profile', title: 'Dr. Williber', info: '+91 021 1234567' }
            ],
            note: {
              status: true,
              message: 'Call in emergency only'
            }
          }
        },
        report_history: {
          send_files: 67,
          received_files: 127,
          files: [
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' },
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' },
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' },
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' }
          ],
          folders: [
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' }
          ]
        }
      },
      {
        id: 1,
        name: 'Ivan',
        s_name: 'Korzh',
        reference: 'Dr.',
        user_avatar: 'users/user-doctor.jpg',
        profession: 'Radiologist',
        location: 'Akbarnagar',
        user_info: {
          basic_info: {
            title: 'Basic Info',
            items: [
              { icon: 'my_profile', title: 'Facility Name', info: 'Sadbhav Hospital' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          experiance: {
            title: 'Work and Education',
            items: [
              { icon: 'my_profile', title: 'Education', info: 'MBBS , MD (Medicine)' },
              { icon: 'my_profile', title: 'Specialty', info: 'Radiologist' },
              { icon: 'my_profile', title: 'Experiance', info: '30 Year' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          address: {
            title: 'Address',
            items: [
              { icon: 'my_profile', title: 'Address', info: '156 – O Block' },
              { icon: 'my_profile', title: 'Area', info: 'Patel State' },
              { icon: 'my_profile', title: 'City', info: 'Naranpura' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          persons: {
            title: 'Contact Persons',
            items: [
              { icon: 'my_profile', title: 'Reception', info: '+91 021 1234567' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          contact: {
            title: 'Personal Contact',
            items: [
              { icon: 'my_profile', title: 'Dr. Williber', info: '+91 021 1234567' }
            ],
            note: {
              status: true,
              message: 'Call in emergency only'
            }
          }
        },
        report_history: {
          send_files: 57,
          received_files: 27,
          files: [
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' },
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' },
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' },
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' }
          ],
          folders: [
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' }
          ]
        }
      },
      {
        id: 2,
        name: 'John',
        s_name: 'Snow',
        reference: 'Dr.',
        user_avatar: 'users/user-doctor.jpg',
        profession: 'Physician',
        location: 'Akbarnagar',
        user_info: {
          basic_info: {
            title: 'Basic Info',
            items: [
              { icon: 'my_profile', title: 'Facility Name', info: 'Sadbhav Hospital' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          experiance: {
            title: 'Work and Education',
            items: [
              { icon: 'my_profile', title: 'Education', info: 'MBBS , MD (Medicine)' },
              { icon: 'my_profile', title: 'Specialty', info: 'Radiologist' },
              { icon: 'my_profile', title: 'Experiance', info: '30 Year' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          address: {
            title: 'Address',
            items: [
              { icon: 'my_profile', title: 'Address', info: '156 – O Block' },
              { icon: 'my_profile', title: 'Area', info: 'Patel State' },
              { icon: 'my_profile', title: 'City', info: 'Naranpura' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          persons: {
            title: 'Contact Persons',
            items: [
              { icon: 'my_profile', title: 'Reception', info: '+91 021 1234567' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          contact: {
            title: 'Personal Contact',
            items: [
              { icon: 'my_profile', title: 'Dr. Williber', info: '+91 021 1234567' }
            ],
            note: {
              status: true,
              message: 'Call in emergency only'
            }
          }
        },
        report_history: {
          send_files: 117,
          received_files: 17,
          files: [
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' },
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' },
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' },
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' }
          ],
          folders: [
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' }
          ]
        }
      },
      {
        id: 3,
        name: 'Ivan',
        s_name: 'Ivanocish',
        reference: 'Dr.',
        user_avatar: 'users/user-doctor.jpg',
        profession: 'Radiologist',
        location: 'Akbarnagar',
        user_info: {
          basic_info: {
            title: 'Basic Info',
            items: [
              { icon: 'my_profile', title: 'Facility Name', info: 'Sadbhav Hospital' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          experiance: {
            title: 'Work and Education',
            items: [
              { icon: 'my_profile', title: 'Education', info: 'MBBS , MD (Medicine)' },
              { icon: 'my_profile', title: 'Specialty', info: 'Radiologist' },
              { icon: 'my_profile', title: 'Experiance', info: '30 Year' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          address: {
            title: 'Address',
            items: [
              { icon: 'my_profile', title: 'Address', info: '156 – O Block' },
              { icon: 'my_profile', title: 'Area', info: 'Patel State' },
              { icon: 'my_profile', title: 'City', info: 'Naranpura' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          persons: {
            title: 'Contact Persons',
            items: [
              { icon: 'my_profile', title: 'Reception', info: '+91 021 1234567' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          contact: {
            title: 'Personal Contact',
            items: [
              { icon: 'my_profile', title: 'Dr. Williber', info: '+91 021 1234567' }
            ],
            note: {
              status: true,
              message: 'Call in emergency only'
            }
          }
        },
        report_history: {
          send_files: 47,
          received_files: 1231,
          files: [
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' },
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' },
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' },
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' }
          ],
          folders: [
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' }
          ]
        }
      },
      {
        id: 5,
        name: 'Alexey',
        s_name: 'Alekseevich',
        reference: 'Dr.',
        user_avatar: 'users/user-doctor.jpg',
        profession: 'Radiologist',
        location: 'Akbarnagar',
        user_info: {
          basic_info: {
            title: 'Basic Info',
            items: [
              { icon: 'my_profile', title: 'Facility Name', info: 'Sadbhav Hospital' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          experiance: {
            title: 'Work and Education',
            items: [
              { icon: 'my_profile', title: 'Education', info: 'MBBS , MD (Medicine)' },
              { icon: 'my_profile', title: 'Specialty', info: 'Radiologist' },
              { icon: 'my_profile', title: 'Experiance', info: '30 Year' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          address: {
            title: 'Address',
            items: [
              { icon: 'my_profile', title: 'Address', info: '156 – O Block' },
              { icon: 'my_profile', title: 'Area', info: 'Patel State' },
              { icon: 'my_profile', title: 'City', info: 'Naranpura' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          persons: {
            title: 'Contact Persons',
            items: [
              { icon: 'my_profile', title: 'Reception', info: '+91 021 1234567' }
            ],
            note: {
              status: false,
              message: ''
            }
          },
          contact: {
            title: 'Personal Contact',
            items: [
              { icon: 'my_profile', title: 'Dr. Williber', info: '+91 021 1234567' }
            ],
            note: {
              status: true,
              message: 'Call in emergency only'
            }
          }
        },
        report_history: {
          send_files: 0,
          received_files: 0,
          files: [
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' },
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' },
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' },
            { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' }
          ],
          folders: [
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
            { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' }
          ]
        }
      }
    ]

function search (nameKey, myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].id === nameKey) {
      return myArray[i]
    }
  }
}

/* GET providers listing. */
router.get('/providers', function (req, res, next) {
  res.json(providers)
})

/* GET user by ID. */
router.get('/providers/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0) {
    res.json(search(parseInt(id), providers))
  } else {
    res.sendStatus(404)
  }
})

export default router

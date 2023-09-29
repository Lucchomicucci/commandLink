export const data = [
    [{
      id: 'firstName',
      placeholder: 'First name',
      required: true,
      type: 'text',
    },
    {
      id: 'lastName',
      placeholder: 'Last name',
      required: true,
      type: 'text',
    }],
    {
      id: 'email',
      placeholder: 'Email',
      required: true,
      type: 'email',
    },
    {
      id: 'address1',
      placeholder: 'Address 1',
      type: 'text',
    },
    [{
      id: 'city',
      placeholder: 'City',
      type: 'text',
    },
    {
      id: 'state',
      placeholder: 'State',
      type: 'text',
    },
    {
      id: 'zip',
      placeholder: 'ZIP',
      type: 'text',
    }],
    {
      id: 'phone',
      placeholder: 'Phone',
      required: true,
      type: 'number',
    },
    {
      id: 'jobTitle',
      options: [
        'Engineer - lead',
        'Engineer - mid level',
        'Engineer - junion',
        'Engineer - front end focused',
        'Engineer - backend focused',
        'Engineer - full stack',
      ],
      placeholder: 'Please select job title',
      type: 'select',
      required: true,
    },
    {
      id: 'reason',
      placeholder: 'Describe why you are a good fit for the job you are applying for.',
      type: 'textarea',
    }
  ]
  
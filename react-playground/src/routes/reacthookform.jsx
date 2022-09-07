import React, { useState, useEffect } from 'react'
import DefaultPage from '../ui/defpage'
import {
  faSearch,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
  Table,
  Toast,
  ToastBody,
  ToastHeader,
} from 'reactstrap'
import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form";
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import * as yup from "yup";



const ToastMsg = ({ data, isopen, setOpen }) => {
  return (
    <Toast isOpen={isopen}>
      <ToastHeader icon="success" toggle={() => setOpen(!isopen)}>
        Submitting...
      </ToastHeader>
      <ToastBody className="font-monospace">
        {
          JSON.stringify(data, null, 2)
        }
      </ToastBody>
    </Toast>
  )
}

const TestForm6 = () => {
  let data = new Array(
    {
      'name': 'service1', 'description': 'desc1'
    },
    {
      'name': 'service2', 'description': 'desc2'
    },
    {
      'name': 'service3', 'description': 'desc3'
    },
    {
      'name': 'service4', 'description': 'desc4'
    }
  )

  const { control, handleSubmit, setValue, formState: {errors} } = useForm({
    defaultValues: {
      serviceTypes: data,
      searchService: '',
      searchDesc: ''
    }
  })

  const serviceTypes = useWatch({control, name: "serviceTypes"})
  const searchService = useWatch({control, name: "searchService"})
  const searchDesc = useWatch({control, name: "searchDesc"})

  const { fields, insert, remove } = useFieldArray({
    control,
    name: "serviceTypes"
  })
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...serviceTypes[index]
    }
  })

  const [countAdded, setCountAdded] = useState(0)
  const [countRemoved, setCountRemoved] = useState(0)
  const [countChanged, setCountChanged] = useState(-1)

  useEffect(() => {
    setCountChanged(countChanged + 1)
  }, [fields])

  const onSubmit = data => {
    toast.success(
      <p className="font-monospace">
        { JSON.stringify(data, null, 2) }
      </p>
    )
  }

  let fieldsView = controlledFields
  if (searchService)
    fieldsView = controlledFields.filter(e => e.name.includes(searchService))

  if (searchDesc)
    fieldsView = controlledFields.filter(e => e.name.includes(searchDesc))

  return (
    <Form onSubmit={ handleSubmit(onSubmit) } className="needs-validation">
      <Row>
        <Col>
          <Table responsive hover size="sm">
            <thead className="table-active align-middle text-center">
              <tr>
                <th>
                  #
                </th>
                <th>
                  Name of service
                </th>
                <th>
                  Description of service
                </th>
                <th>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#ECECEC' }}>
                <td className="align-middle text-center">
                  <FontAwesomeIcon icon={faSearch}/>
                </td>
                <td className="align-middle text-center">
                  <Controller
                    name="searchService"
                    control={control}
                    render={ ({field}) =>
                      <Input
                        {...field}
                        className='form-control'
                      />
                    }
                  />
                </td>
                <td className="align-middle text-center">
                  <Controller
                    name="searchDesc"
                    control={control}
                    render={ ({field}) =>
                      <Input
                        {...field}
                        className='form-control'
                      />
                    }
                  />
                </td>
                <td className="align-middle text-center">
                </td>
              </tr>
              {
                fieldsView.map((entry, index) =>
                  <tr key={entry.id}>
                    <td>
                      {index + 1}
                    </td>
                    <td>
                      <Controller
                        name={`serviceTypes.${index}.name`}
                        control={control}
                        render={ ({field}) =>
                          <Input
                            {...field}
                            className={ entry.isNew ? "fw-bold border border-success form-control" : "fw-bold form-control"}
                          />
                        }
                      />
                    </td>
                    <td>
                      <Controller
                        name={`serviceTypes.${index}.description`}
                        control={control}
                        render={ ({field}) =>
                          <Input
                            {...field}
                            className={ entry.isNew ? "border border-success form-control" : "form-control"}
                          />
                        }
                      />
                    </td>
                    <td className="text-center align-middle">
                      <ButtonGroup size='sm'>
                        <Button className="fw-bold" color="success" onClick={() => {
                          insert(index + 1, {name: '', description: '', isNew: true})
                          setCountAdded(countAdded + 1)
                        }}>
                          +
                        </Button>
                        <Button className="fw-bold" color="danger" onClick={() => {
                          remove(index)
                          setCountRemoved(countRemoved + 1)
                        }}>
                          -
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col className="position-relative text-center">
          <Button className="ms-3 btn-sm position-absolute top-0 start-0" color="secondary" onClick={() => {
            setValue('serviceTypes', data)
          }}>
            Reset
          </Button>
          <div className="ms-3 mt-2 position-absolute top-50 start-0">
            Added: {countAdded}, Removed: {countRemoved}, Changed: {countChanged}
          </div>
          <Button className="mt-4 mb-3" color="success" type="submit">
            Submit
          </Button>
          <Button className="mb-2 btn-sm position-absolute bottom-50 end-0" color="secondary" onClick={() => {
            let newData = serviceTypes.slice(1, serviceTypes.length)
            setValue('serviceTypes', newData)
          }}>
            Remove first
          </Button>
          <Button className="btn-sm position-absolute bottom-0 end-0" color="secondary" onClick={() => {
            let newData = serviceTypes.slice(0, serviceTypes.length - 1)
            setValue('serviceTypes', newData)
          }}>
            Remove latest
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

const schema2 = yup.object().shape({
  names: yup.array().of(yup.object().shape(
    {
      firstname: yup.string().required(),
      lastname: yup.string().required(),
    }))
});

const TestForm5 = () => {
  const { control, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema2),
    defaultValues: {
      names: [
        {firstname: 'Daniel', lastname: 'Vrcic'},
        {firstname: 'Joso', lastname: 'Dzekson'}
      ]
    }
  })

  const InputNames = ({control}) => {
    const names = useWatch({control, name: "names"})

    return (
      names.map((name) =>
        <>
          <span className="font-monospace"><mark>
            {
              name['firstname']
            }
          </mark></span>
          <mark>{' '}</mark>
          <span className="font-monospace"><mark>
            {
              name['lastname']
            }
          </mark></span>
          {', '}
        </>
      )
    )
  }


  const { fields, append, remove } = useFieldArray({
    control,
    name: "names",
  });

  const [checkedFields, setCheckFields] = useState(Array(fields.length).fill(false))

  const onCheck = index => {
    let array = [...checkedFields]
    array[index] = !array[index]
    setCheckFields(array)
  }

  const onAdd = (append, data) => {
    append(data)
  }

  const onRemove = (remove, index) => {
    remove(index)
  }

  const onSubmit = data => {
    toast.success(
      <p className="font-monospace">
        { JSON.stringify(data, null, 2) }
      </p>
    )
  }

  return (
    <>
      <Label for="firstname">
        Array of names
      </Label>
      <Form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
        <FormGroup>
          {
            fields.map((item, index) => (
              <Row key={item.id} className="ps-0 ms-0">
                <Col sm={{size: 1}} className="d-flex flex-row-reverse">
                  <Input type="checkbox" className="fw-bold" onClick={() => onCheck(index)}/>
                </Col>
                <Col sm={{size: 4}} className="g-0">
                  <InputGroup>
                    <Controller
                      name={`names.${index}.firstname`}
                      control={control}
                      render={ ({field}) =>
                        <Input
                          {...field}
                          className={`form-control ${errors.names && errors.names[index] && errors.names[index].firstname ? "is-invalid" : ''}`}
                        />
                      }
                    />
                    <ErrorMessage
                      errors={errors}
                      name={`names.${index}.firstname`}
                      render={({ message }) =>
                        <FormFeedback invalid className="end-0">
                          { message }
                        </FormFeedback>
                      }
                    />
                  </InputGroup>
                </Col>
                <Col sm={{size: 4}} className="g-0">
                  <InputGroup>
                    <Controller
                      name={`names.${index}.lastname`}
                      control={control}
                      render={ ({field}) =>
                        <Input
                          {...field}
                          className={`${errors.names && errors.names[index] && errors.names[index].lastname ? "is-invalid" : ''}`}
                        />
                      }
                    />
                    <ErrorMessage
                      errors={errors}
                      name={`names.${index}.lastname`}
                      render={({ message }) =>
                        <FormFeedback invalid className="end-0">
                          { message }
                        </FormFeedback>
                      }
                    />
                  </InputGroup>
                </Col>
                <Col sm={{size: 1}} className="d-flex align-items-center">
                  <ButtonGroup size='sm'>
                    <Button className="ms-2 fw-bold" color="danger" onClick={() => onRemove(remove, index)}>
                      -
                    </Button>
                    {
                      index + 1 === fields.length ?
                        <Button className="fw-bold" color="success" onClick={() => onAdd(append, {firstname: '', lastname: ''})}>
                          +
                        </Button>
                      :
                        ''
                    }
                  </ButtonGroup>
                </Col>
              </Row>
            ))
          }
          <Row className='mt-2'>
            <Col className="text-center">
              <Button className="mt-3" color="success" type="submit">
                Submit
              </Button>
              <Button className="mt-3 ms-2" color="secondary" type="submit">
                Delete selected
              </Button>
            </Col>
          </Row>
        </FormGroup>
      </Form>
      <h5>Watched values:</h5>
      <InputNames control={control}/>
    </>
  );
}


const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  age: yup.number().positive().required(),
  email: yup.string().email().required(),
  web: yup.string().url().required(),
}).required();

const TestForm4 = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      age: '',
      firstname: '',
      lastname: '',
      email: '',
    }
  });
  const onSubmit = data => {
    toast.success(
      <p className="font-monospace">
        { JSON.stringify(data, null, 2) }
      </p>
    )
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
      <FormGroup>
        {/* register your input into the hook by invoking the "register" function */}
        <Row>
          <Col sm={{size: 10}}>
            <Label for="firstname">
              First name:
            </Label>
            <InputGroup>
              <Controller
                name="firstname"
                control={control}
                render={ ({field}) =>
                  <Input
                    {...field}
                    className={`form-control ${errors.firstname && "is-invalid"}`}
                  />
                }
              />
              <ErrorMessage
                errors={errors}
                name="firstname"
                render={({ message }) =>
                  <FormFeedback tooltip invalid className="end-0">
                    { message }
                  </FormFeedback>
                }
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col sm={{size: 10}}>
            <Label for="lastname">
              Last name:
            </Label>
            <InputGroup>
              <Controller
                name="lastname"
                control={control}
                render={ ({field}) =>
                  <Input
                    {...field}
                    className={`form-control ${errors.lastname && "is-invalid"}`}
                  />
                }
              />
              <ErrorMessage
                errors={errors}
                name="lastname"
                render={({ message }) =>
                  <FormFeedback tooltip invalid className="end-0">
                    { message }
                  </FormFeedback>
                }
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col sm={{size: 4}}>
            <Label for="age">
              Age:
            </Label>
            <InputGroup>
              <Controller
                name="age"
                control={control}
                render={ ({field}) =>
                  <Input
                    {...field}
                    className={`form-control ${errors.age && "is-invalid"}`}
                  />
                }
              />
              <ErrorMessage
                errors={errors}
                name="age"
                render={({ message }) =>
                  <FormFeedback invalid className="end-0">
                    Positive number
                  </FormFeedback>
                }
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col sm={{size: 8}}>
            <Label for="email">
              Email:
            </Label>
            <InputGroup>
              <Controller
                name="email"
                control={control}
                render={ ({field}) =>
                  <Input
                    {...field}
                    className={`form-control ${errors.email && "is-invalid"}`}
                  />
                }
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) =>
                  <FormFeedback invalid className="end-0">
                    { message }
                  </FormFeedback>
                }
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col sm={{size: 8}}>
            <Label for="web">
              Web:
            </Label>
            <InputGroup>
              <Controller
                name="web"
                control={control}
                render={ ({field}) =>
                  <Input
                    {...field}
                    className={`form-control ${errors.web && "is-invalid"}`}
                  />
                }
              />
              <ErrorMessage
                errors={errors}
                name="web"
                render={({ message }) =>
                  <FormFeedback invalid className="end-0">
                    { message }
                  </FormFeedback>
                }
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col className="text-center">
            <Button className="mt-3" color="success" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
}


const TestForm3 = () => {
  return (
    <Row>
      <Col className="text-center">
        <Button className="mt-3" color="success" onClick={() => toast.success('Showed me')}>
          Show me
        </Button>
      </Col>
    </Row>
  );
}


const TestForm2 = ({ setData, setToggle }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      f1: 'test',
      f2: ''
    }
  });
  const onSubmit = data => {
    setData(data)
    setToggle(true)
  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
      <FormGroup>
        {/* register your input into the hook by invoking the "register" function */}
        <Row>
          <Col>
            <Label for="f1">
              Field1
            </Label>
            <InputGroup>
              <Controller
                name="f1"
                control={control}
                rules={{required: true}}
                render={ ({field}) =>
                  <Input
                    {...field}
                    className={`form-control ${errors.f1 && "is-invalid"}`}
                  />
                }
              />
              { errors.f1 &&
                <FormFeedback tooltip invalid>
                  Needs text
                </FormFeedback>
              }
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Label className="mt-2" for="f2">
              Field2
            </Label>
            <InputGroup>
              <Controller
                name="f2"
                control={control}
                rules={{required: true}}
                render={ ({field}) =>
                  <Input
                    {...field}
                    className={`form-control ${errors.f2 && "is-invalid"}`}
                  />
                }
              />
              { errors.f2 &&
                <FormFeedback tooltip invalid>
                  Needs text
                </FormFeedback>
              }
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button className="mt-3" color="success" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
}


const TestForm1 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    toast.success(
      <p className="font-monospace">
        { JSON.stringify(data, null, 2) }
      </p>
    )
  }

  const {ref: ref1, ...exampleField} = register("example", {required: true})
  const {ref: ref2, ...exampleFieldRequired} = register("exampleRequired", {required: true} )

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
      <FormGroup>
        {/* register your input into the hook by invoking the "register" function */}
        <Row>
          <Col>
            <Label for="f1">
              Field1
            </Label>
            <InputGroup>
              <Input
                id="f1"
                className={`form-control ${errors.example && "is-invalid"}`}
                defaultValue="test"
                innerRef={ref1} {...exampleField}
              />
              { errors.example &&
                <FormFeedback invalid>
                  Needs text
                </FormFeedback>
              }
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Label className="mt-2" for="f2">
              Field2
            </Label>
            <InputGroup>
              <Input
                id="f2"
                className={`form-control ${errors.exampleRequired && "is-invalid"}`}
                innerRef={ref2} {...exampleFieldRequired}
              />
              { errors.exampleRequired &&
                <FormFeedback invalid>
                  Needs text
                </FormFeedback>
              }
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button className="mt-3" color="success" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
}


const ReactHookForm = () => {
  const [toggle, setToggle] = useState(false)
  const [submitData, setSubmitData] = useState(undefined)

  return (
    <>
      <Row className="fixed-top mt-5 pt-3" style={{zIndex: '15'}}>
        <Col xl={{size:3, offset: 9}} className="d-flex justify-content-end">
          <ToastMsg className="p-3" data={submitData} isopen={toggle} setOpen={setToggle}/>
        </Col>
      </Row>
      <DefaultPage title="React Hook Form testing">
        <Card>
          <CardHeader>
            Basics
          </CardHeader>
          <Row>
            <Col sm="4">
              <CardBody>
                <CardTitle className="bg-secondary text-center text-white">
                  <p className="font-monospace">
                    useForm() & react-toastify
                  </p>
                </CardTitle>
                <TestForm1/>
              </CardBody>
            </Col>
            <Col sm="4">
              <CardBody>
                <CardTitle className="bg-secondary text-center text-white">
                  <p className="font-monospace">
                    Controller & reactstrap Toast
                  </p>
                </CardTitle>
                <TestForm2 setData={setSubmitData} setToggle={setToggle}/>
              </CardBody>
            </Col>
            <Col sm="4">
              <CardBody>
                <CardTitle className="bg-secondary text-center text-white">
                  <p className="font-monospace">
                    react-toastify
                  </p>
                </CardTitle>
                <TestForm3/>
              </CardBody>
            </Col>
            <Col sm="4">
              <CardBody>
                <CardTitle className="bg-secondary text-center text-white">
                  <p className="font-monospace">
                    Yup
                  </p>
                </CardTitle>
                <TestForm4/>
              </CardBody>
            </Col>
            <Col sm="8">
              <CardBody>
                <CardTitle className="bg-secondary text-center text-white">
                  <p className="font-monospace">
                    FieldArray & useWatch
                  </p>
                </CardTitle>
                <TestForm5/>
              </CardBody>
            </Col>
            <Col sm="8">
              <CardBody>
                <CardTitle className="bg-secondary text-center text-white">
                  <p className="font-monospace">
                    FieldArray & Table
                  </p>
                </CardTitle>
                <TestForm6/>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </DefaultPage>
    </>
  )
}

export default ReactHookForm

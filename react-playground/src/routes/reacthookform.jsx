import React, { useState } from 'react'
import DefaultPage from '../ui/defpage'
import {
  Button,
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
  Toast,
  ToastHeader,
  ToastBody,
  Label,
  Row,
} from 'reactstrap'
import { useForm, Controller } from "react-hook-form";
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
          </Row>
        </Card>
      </DefaultPage>
    </>
  )
}

export default ReactHookForm

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


const TestForm3 = () => {
  return (
    <Row>
      <Col className="text-center">
        <Button className="mt-3" onClick={() => toast('Showed me')}>
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
                    className={`form-control ${errors.f1 ? "is-invalid" : "is-valid"}`}
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
                    className={`form-control ${errors.f2 ? "is-invalid" : "is-valid"}`}
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
            <Button className="mt-3" type="submit">
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
  const onSubmit = data => console.log(data);

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
                className={`form-control ${errors.example ? "is-invalid" : "is-valid"}`}
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
                className={`form-control ${errors.exampleRequired ? "is-invalid" : "is-valid"}`}
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
            <Button className="mt-3" type="submit">
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
        <Col sm={{size:3, offset: 9}}>
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
                <CardTitle>
                  <p className="font-monospace">
                    useForm()
                  </p>
                </CardTitle>
                <TestForm1/>
              </CardBody>
            </Col>
            <Col sm="4">
              <CardBody>
                <CardTitle>
                  <p className="font-monospace">
                    useController()
                  </p>
                </CardTitle>
                <TestForm2 setData={setSubmitData} setToggle={setToggle}/>
              </CardBody>
            </Col>
            <Col sm="4">
              <CardBody>
                <CardTitle>
                  <p className="font-monospace">
                    react-tostify
                  </p>
                </CardTitle>
                <TestForm3/>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </DefaultPage>
    </>
  )
}

export default ReactHookForm

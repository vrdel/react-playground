import React from 'react'
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
  Label,
  Row,
} from 'reactstrap'
import { useForm } from "react-hook-form";


const TestForm1 = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const {ref: ref1, ...exampleField} = register("example", {required: true})
  const {ref: ref2, ...exampleFieldRequired} = register("exampleRequired", {required: true} )

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Row>
      <Col>
        <Form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
          <FormGroup>
            {/* register your input into the hook by invoking the "register" function */}
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
            <Button className="mt-3" type="submit">
              Submit
            </Button>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  );
}

const ReactHookForm = () => {
  return (
    <>
      <DefaultPage title="React Hook Form testing">
        <Row>
          <Col sm="4">
            <Card>
              <CardHeader>
                Basics
              </CardHeader>
              <CardBody>
                <CardTitle>
                  <p className="font-monospace">
                    useForm()
                  </p>
                </CardTitle>
                <TestForm1/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </DefaultPage>
    </>
  )
}

export default ReactHookForm

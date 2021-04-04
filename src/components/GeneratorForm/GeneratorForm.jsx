import React, { useContext } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { ImageContext } from '../../contexts/ImageContext';
import GeneratorImageService from '../../services/GeneratorImageService';
import { types } from '../../types/types';

const GeneratorForm = () => {
  const { dispatch } = useContext(ImageContext);

  const {
    register, errors, handleSubmit, watch
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await GeneratorImageService.create(data);
      dispatch({
        type: types.createImage,
        payload: {
          url: response,
          width: data.width,
          height: data.height,
          format: data.format,
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-3 pt-3 mb-5">
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Row className="justify-content-start align-items-center pb-2">
          <Col xs="12" md="4">
            <Form.Group>
              <Form.Control
                name="width"
                type="text"
                placeholder="Width"
                isInvalid={!!errors.width}
                ref={register({
                  required: 'Required',
                  min: 0,
                  max: 3000,
                  validate: (e) => !isNaN(e)
                })}
              />
              <Form.Label className="text-accent-light">
                Width
              </Form.Label>
              {errors.width
                && (
                  <Form.Control.Feedback type="invalid">
                    {errors.width.message || 'Required'}
                  </Form.Control.Feedback>
                )}
            </Form.Group>
          </Col>
          <Col xs="12" md="4">
            <Form.Group>
              <Form.Control
                name="height"
                type="text"
                placeholder="Height"
                isInvalid={!!errors.height}
                ref={register({
                  required: 'Required',
                  min: 0,
                  max: 3000,
                  validate: (e) => !isNaN(e)
                })}
              />
              <Form.Label className="text-accent-light">
                Height
              </Form.Label>
              {errors.height
                && (
                  <Form.Control.Feedback type="invalid">
                    {errors.height.message || 'Required'}
                  </Form.Control.Feedback>
                )}
            </Form.Group>
          </Col>
          <Col xs="12" md="4">
            <Form.Group>
              <Form.Control
                name="format"
                as="select"
                placeholder="Format"
                isInvalid={!!errors.format}
                ref={register({
                  required: 'Required',
                })}
              >
                <option value="png">PNG</option>
                <option value="jpg">JPG</option>
              </Form.Control>
              <Form.Label className="text-accent-light">
                Format
              </Form.Label>
              {errors.format
                && (
                  <Form.Control.Feedback type="invalid">
                    {errors.format.message || 'Required'}
                  </Form.Control.Feedback>
                )}
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-start align-items-center py-2">
          <Col xs="12" md="9">
            <Form.Group>
              <Form.Control
                name="text"
                type="text"
                placeholder="Text"
                isInvalid={!!errors.text}
                ref={register({
                  min: 2,
                  max: 250
                })}
              />
              <Form.Label className="text-accent-light">
                Text
              </Form.Label>
              {errors.text
                && (
                  <Form.Control.Feedback type="invalid">
                    {errors.text.message || 'Required'}
                  </Form.Control.Feedback>
                )}
            </Form.Group>
          </Col>
          <Col xs="12" md="3">
            <Form.Group>
              <Form.Control
                name="fontSize"
                type="text"
                placeholder="Font Size"
                isInvalid={!!errors.fontSize}
                ref={register({
                  min: 0,
                  max: 120,
                  validate: (e) => watch('text') ? e !== '' && !isNaN(e) : !isNaN(e)
                })}
              />
              <Form.Label className="text-accent-light">
                Font Size
              </Form.Label>
              {errors.fontSize
                && (
                  <Form.Control.Feedback type="invalid">
                    {errors.fontSize.message || 'Required'}
                  </Form.Control.Feedback>
                )}
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-start align-items-center pt-2">
          <Col xs="12" md="4">
            <Form.Group>
              <Form.Control
                name="fontColor"
                type="color"
                placeholder="Font Color"
                className="hoverable"
                isInvalid={!!errors.fontColor}
                defaultValue="#ffffff"
                ref={register({
                  pattern: /^#[A-Fa-f0-9]{6}/,
                  validate: (e) => watch('text') ? e !== '' : true
                })}
              />
              <Form.Label className="text-accent-light">
                Font Color
              </Form.Label>
              {errors.fontColor
                && (
                  <Form.Control.Feedback type="invalid">
                    {errors.fontColor.message || 'Required'}
                  </Form.Control.Feedback>
                )}
            </Form.Group>
          </Col>
          <Col xs="12" md="4">
            <Form.Group>
              <Form.Control
                name="bgColor"
                type="color"
                placeholder="Background Color"
                className="hoverable"
                isInvalid={!!errors.bgColor}
                defaultValue="#000000"
                ref={register({
                  required: 'Required',
                  pattern: /^#[A-Fa-f0-9]{6}/
                })}
              />
              <Form.Label className="text-accent-light">
                Background Color
              </Form.Label>
              {errors.bgColor
                && (
                  <Form.Control.Feedback type="invalid">
                    {errors.bgColor.message || 'Required'}
                  </Form.Control.Feedback>
                )}
            </Form.Group>
          </Col>
          <Col xs="12" md="4">
            <div className="d-flex justify-content-center align-items-center">
              <button className="btn btn-5 btn-5a text-background-light bg-base-light" type="submit">
                <span>Generate Image</span>
              </button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default GeneratorForm

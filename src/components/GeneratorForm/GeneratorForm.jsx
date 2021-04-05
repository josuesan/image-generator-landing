import React, { useContext } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { ImageContext } from '../../contexts/ImageContext';
import GeneratorImageService from '../../services/GeneratorImageService';
import { types } from '../../types/types';

const GeneratorForm = () => {
  const { image, dispatch } = useContext(ImageContext);

  const { register, formState: { errors }, handleSubmit, watch } = useForm();

  const fontColor = watch('fontColor');
  const bgColor = watch('bgColor');

  const onSubmit = async (data) => {
    console.log('Submit', data);
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
      document.getElementById("previewer").scrollIntoView();
    } catch (error) {
      console.log(error);
    }
  };
  console.log('image', image);
  console.log('observable de fontColor', fontColor);
  return (
    <Container className="mt-3 pt-3 mb-5">
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Row className="justify-content-start align-items-center pb-0 pb-md-2">
          <Col xs="12" md="4">
            <Form.Group>
              <Form.Control
                name="width"
                type="text"
                placeholder="Width"
                isInvalid={!!errors.width}
                defaultValue={image.width}
                ref={register({
                  required: 'Required',
                  min: 0,
                  max: 3000,
                  validate: (e) => !isNaN(e)
                })}
              />
              <Form.Label className="text-accent-light bold">
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
                defaultValue={image.height}
                ref={register({
                  required: 'Required',
                  min: 0,
                  max: 3000,
                  validate: (e) => !isNaN(e)
                })}
              />
              <Form.Label className="text-accent-light bold">
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
              <Form.Label className="text-accent-light bold">
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
        <Row className="justify-content-start align-items-center py-0 py-md-2">
          <Col xs="12" md="9">
            <Form.Group>
              <Form.Control
                name="text"
                type="text"
                placeholder="Text"
                defaultValue={image.text}
                isInvalid={!!errors.text}
                ref={register({
                  min: 2,
                  max: 250
                })}
              />
              <Form.Label className="text-accent-light bold">
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
                defaultValue={image.fontSize}
                ref={register({
                  min: 0,
                  max: 120,
                  validate: (e) => watch('text') ? e !== '' && !isNaN(e) : !isNaN(e)
                })}
              />
              <Form.Label className="text-accent-light bold">
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
        <Row className="justify-content-start align-items-center pt-0 pt-md-2">
          <Col xs="12" md="4">
            <Form.Group className="color-picker">
              <span>{fontColor}</span>
              <Form.Control
                name="fontColor"
                type="text"
                placeholder="Font Color"
                className="hoverable"
                isInvalid={!!errors.fontColor}
                defaultValue={image.fontColor}
                ref={register({
                  pattern: /^#[A-Fa-f0-9]{6}/,
                })}
              />
              <Form.Label className="text-accent-light bold">
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
            <Form.Group className="color-picker">
              <span>{bgColor}</span>
              <Form.Control
                name="bgColor"
                type="color"
                placeholder="Background Color"
                className="hoverable"
                isInvalid={!!errors.bgColor}
                defaultValue={image.bgColor}
                ref={register({
                  required: 'Required',
                  pattern: /^#[A-Fa-f0-9]{6}/
                })}
              />
              <Form.Label className="text-accent-light bold">
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
            <div className="d-flex justify-content-center align-items-center extra-p mt-5 mt-md-0">
              <button className="btn btn-5 btn-5a bold text-base-inv-light bg-inverted-light" type="submit">
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

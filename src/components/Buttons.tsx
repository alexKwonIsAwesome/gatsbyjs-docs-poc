import React from 'react';
import { CardBody, Row, Col, Button, Card, Status } from 'oah-ui';

const status: Status[] = ['Info', 'Success', 'Danger', 'Primary', 'Warning', 'Control', 'Basic'];

const Buttons: React.FC = () => {
  return (
    <Card>
      <header>Button demos</header>
      <CardBody>
        <Row>
          {status.map((state) => (
            <Col key={state} style={{ marginBottom: '1.5rem' }} breakPoint={{ xs: true }}>
              <Button fullWidth status={state}>
                {state}
              </Button>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
};

export default Buttons;

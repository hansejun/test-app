import React, { useState } from 'react';
import { Form, FormGroup, OverlayTrigger } from 'react-bootstrap';
import Popover from 'react-bootstrap/Popover';

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClickCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const PopoverContent = (
    <Popover id="popover-contained" data-testid="popover-contained">
      <Popover.Header as="h3">Popover bottom</Popover.Header>
      <Popover.Body>
        <strong>Hello</strong>
      </Popover.Body>
    </Popover>
  );

  const CheckBoxLabel = (
    <label>
      I agree to
      <OverlayTrigger placement="right" overlay={PopoverContent}>
        <span className="text-blue-300">Terms of service</span>
      </OverlayTrigger>
    </label>
  );

  return (
    <Form className="flex-column border-zinc-400">
      <FormGroup>
        <Form.Check
          type="checkbox"
          onChange={handleClickCheckBox}
          checked={isChecked}
          label={CheckBoxLabel}
        />
      </FormGroup>
      <button disabled={!isChecked} className="border p-2 disabled:bg-red-300">
        Submit
      </button>
    </Form>
  );
};

export default SummaryForm;

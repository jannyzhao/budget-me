import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { composeTransaction } from "../../store/transactions";
import { useDispatch } from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";

function AddTransaction({ className }) {
  const [show, setShow] = useState(false);
  const [type, setType] = useState();
  const [category, setCategory] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleType = (e) => {
    setType(e);
  };

  const handleCategory = (e) => {
    setCategory(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      date: e.target.date.value,
      amount: e.target.amount.value,
      company: e.target.company.value,
      description: e.target.description.value,
      type,
      category,
    };
    dispatch(composeTransaction(transaction));
    handleClose();
  };

  return (
    <div className={className}>
      <Button variant="success" onClick={handleShow}>
        + Add Transaction
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Transaction</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex gap-4 mb-3">
              <Form.Group controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" name="date" autoFocus />
              </Form.Group>
              <Form.Group controlId="amount">
                <Form.Label>Amount</Form.Label>
                <InputGroup>
                  <InputGroup.Text>$</InputGroup.Text>
                  <Form.Control type="text" name="amount" />
                </InputGroup>
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" name="company" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={2} name="description" />
            </Form.Group>

            <div className="d-flex gap-4">
              <Form.Group className="mb-3" controlId="type">
                <Form.Label>Type</Form.Label>
                <DropdownButton
                  id="type"
                  title={type ? type : "Type"}
                  onSelect={handleType}
                  variant="light"
                  name="type"
                >
                  <Dropdown.Item eventKey="Income">Income</Dropdown.Item>
                  <Dropdown.Item eventKey="Expense">Expense</Dropdown.Item>
                  <Dropdown.Item eventKey="Saving">Saving</Dropdown.Item>
                </DropdownButton>
              </Form.Group>
              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <DropdownButton
                  id="category"
                  title={category ? category : "Category"}
                  onSelect={handleCategory}
                  variant="light"
                  name="category"
                >
                  <Dropdown.Item eventKey="Auto">Auto</Dropdown.Item>
                  <Dropdown.Item eventKey="Clothing">Clothing</Dropdown.Item>
                  <Dropdown.Item eventKey="Groceries">Groceries</Dropdown.Item>
                  <Dropdown.Item eventKey="Entertainment">
                    Entertainment
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Food">Food</Dropdown.Item>
                  <Dropdown.Item eventKey="Household">Household</Dropdown.Item>
                  <Dropdown.Item eventKey="Insurance">Insurance</Dropdown.Item>
                  <Dropdown.Item eventKey="Miscellaneous">
                    Miscellaneous
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Paycheck">Paycheck</Dropdown.Item>
                  <Dropdown.Item eventKey="Rent/Mortgage">
                    Rent/Mortgage
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Subscription">
                    Subscription
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Utilities">Utilities</Dropdown.Item>
                </DropdownButton>
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default AddTransaction;

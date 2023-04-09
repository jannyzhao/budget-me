import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch } from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import { updateTransaction } from "../../store/transactions";

function EditTransaction({ transaction }) {
  const [show, setShow] = useState(false);
  const [type, setType] = useState(transaction.type);
  const [category, setCategory] = useState(transaction.category);
  const [company, setCompany] = useState(transaction.company);
  const formattedDate = new Date(transaction.date)
    .toISOString()
    .substring(0, 10);
  const [date, setDate] = useState(formattedDate);
  const [description, setDescription] = useState(transaction.description);
  const [amount, setAmount] = useState(transaction.amount);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleDate = (e) => {
    setDate(e.target.value);
    console.log(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleCompany = (e) => {
    setCompany(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const transaction = {
      _id: e.target.id.value,
      date,
      amount,
      company,
      description,
      type,
      category,
    };
    dispatch(updateTransaction(transaction));
    handleClose();
  };

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleEdit}>
          <input type="hidden" name="id" value={transaction?._id} />
          <Modal.Header closeButton>
            <Modal.Title>Edit Transaction</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex gap-4 mb-3">
              <Form.Group controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formattedDate}
                  onChange={handleDate}
                  autoFocus
                />
              </Form.Group>
              <Form.Group controlId="amount">
                <Form.Label>Amount</Form.Label>
                <InputGroup>
                  <InputGroup.Text>$</InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="amount"
                    value={amount}
                    onChange={handleAmount}
                  />
                </InputGroup>
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={company}
                onChange={handleCompany}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="description"
                value={description}
                onChange={handleDescription}
              />
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
                  <Dropdown.Item eventKey="Savings">Savings</Dropdown.Item>
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
                  <Dropdown.Item eventKey="Savings">Savings</Dropdown.Item>
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
    </>
  );
}

export default EditTransaction;

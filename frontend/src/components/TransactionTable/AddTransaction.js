import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function AddTransaction() {
  const [show, setShow] = useState(false);
  const [type, setType] = useState();
  const [category, setCategory] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleType = (e) => {
    setType(e);
  };

  const handleCategory = (e) => {
    setCategory(e);
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        + Add Transaction
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="d-flex gap-4 mb-3 ">
              <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" autoFocus/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Amount</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>
            <Form.Group className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>

            <div className="d-flex gap-4">
              <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <DropdownButton
                  id="type"
                  title={type ? type : "Type"}
                  onSelect={handleType}
                  variant="light"
                >
                  <Dropdown.Item eventKey="Income">Income</Dropdown.Item>
                  <Dropdown.Item eventKey="Expense">Expense</Dropdown.Item>
                  <Dropdown.Item eventKey="Saving">Saving</Dropdown.Item>
                </DropdownButton>
              </Form.Group>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <DropdownButton
                  id="category"
                  title={category ? category : "Category"}
                  onSelect={handleCategory}
                  variant="light"
                >
                  <Dropdown.Item eventKey="Groceries">Groceries</Dropdown.Item>
                  <Dropdown.Item eventKey="Food">Food</Dropdown.Item>
                  <Dropdown.Item eventKey="Clothing">Clothing</Dropdown.Item>
                  <Dropdown.Item eventKey="Paycheck">Paycheck</Dropdown.Item>
                </DropdownButton>
              </Form.Group>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTransaction;

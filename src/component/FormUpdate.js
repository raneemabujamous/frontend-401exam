import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export class FormUpdate extends Component {
  render() {
    return (
      <div>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>PLESSE REFRASH AFTER UPDATE DATA</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={this.props.updatedata}>
              <label> update description </label>
              <input
                type="text"
                defaultValue={this.props.description}
                onChange={this.props.changeDes}
              />
              <br />
              <label> update image_url </label>

              <input
                type="text"
                defaultValue={this.props.image_url}
                onChange={this.props.changeImage}
              />
              <br />
              <label> update price </label>

              <input
                type="text"
                defaultValue={this.props.toUSD}
                onChange={this.props.changeUSD}
              />
              <br />
              <input value="submit" type="submit" />
            </form>
          </Modal.Body>

          <Modal.Footer></Modal.Footer>
        </Modal.Dialog>
        ;
      </div>
    );
  }
}

export default FormUpdate;

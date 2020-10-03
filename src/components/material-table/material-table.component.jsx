import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import "./material-table.styles.css";

const columns = [
  {
    id: "image_uri",
    label: "IMAGE",
    minWidth: 170,
    fontWeight: 600,
    align: "center",
  },
  {
    id: "category_name",
    label: "CATEGORY NAME",
    minWidth: 170,
    fontWeight: 600,
    align: "center",
  },
  {
    id: "display_name",
    label: "DISPLAY NAME",
    minWidth: 170,
    fontWeight: 600,
    align: "center",
  },
  {
    id: "description",
    label: "DESCRIPTION",
    minWidth: 270,
    fontWeight: 600,
    align: "center",
  },
];

const MaterialTable = ({ categoriesData = [] }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className="root">
      <TableContainer className="container">
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: column.fontWeight,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {categoriesData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      let value = row[column.id];
                      if (column.id === "image_uri" && value === null) {
                        value =
                          "https://react.semantic-ui.com/images/wireframe/image.png";
                      }

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "image_uri" ? (
                            <img
                              alt="product_image"
                              className="product_image"
                              src={value}
                            />
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={categoriesData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default MaterialTable;

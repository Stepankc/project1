// @mui
import {
  Box,
  Card,
  Table,
  Button,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  CardHeader,
  TableContainer,
} from '@mui/material';
// utils
import { Link } from 'react-router-dom';
import { fCurrency } from '../../utils/formatNumber';
// _mock_
import { _appInvoices } from '../../_mock';
// components
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';

// ----------------------------------------------------------------------

export default function AppNewInvoice() {

  return (
    <Card>
      <CardHeader title="Владельцы станций" sx={{ mb: 1 }} />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Имя</TableCell>
                <TableCell>Кол-во станций</TableCell>
                <TableCell>Энергия</TableCell>
                <TableCell>Деньги</TableCell>
                <TableCell>
                <Box sx={{ textAlign: 'right' }}>
                  <Link to='/dashboard/owners' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
                    перейти в раздел
                  </Button>
                  </Link>
                </Box>
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {_appInvoices.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.countStation}</TableCell>
                  <TableCell>{row.energy} кВт</TableCell>
                  <TableCell>{fCurrency(row.price)}</TableCell>
                  <TableCell align="right">
                  <Link to='/dashboard/owner/profileOwner' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <Button variant="contained">
                      Подробнее
                    </Button>
                  </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>
    </Card>
  );
}

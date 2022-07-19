import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, Switch, FormControlLabel, Typography } from '@mui/material';
// utils
import { fData } from '../../utils/formatNumber';
// _mock
import { countries, region, charging, modelCharge, typeObject, owner, timePeriod } from '../../_mock';
// components
import Label from '../../components/Label';
import { FormProvider, RHFSelect, RHFSwitch, RHFTextField, RHFUploadAvatar } from '../../components/hook-form';

// ----------------------------------------------------------------------

export default function UserNewEditForm() {
  const navigate = useNavigate();

  const NewUserSchema = Yup.object().shape({
    country: Yup.string().required('country is required'),
    city: Yup.string().required('City is required'),
  });

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
  });

  const { reset, watch, setValue, handleSubmit } = methods;

  const values = watch();

  return (
    <FormProvider methods={methods}>
      <Grid container justifyContent={'space-between'}>
        <Grid item xs={12} md={2}>
          <RHFSelect name="Регион" label="Регион" placeholder="Регион">
            <option value="" />
            {region.map((option) => (
              <option key={option.code} value={option.label}>
                {option.label}
              </option>
            ))}
          </RHFSelect>
        </Grid>
        <Grid item xs={12} md={3}>
          <Stack direction={'column'} justifyContent="space-between" alignItems="baseline" spacing={2}>
            <RHFSelect name="Производитель зарядной станции" label="Производитель зарядной станции" placeholder="Производитель зарядной станции">
              <option value="" />
              {charging.map((option) => (
                <option key={option.code} value={option.label}>
                  {option.label}
                </option>
              ))}
            </RHFSelect>
            <RHFSelect name="Модель станции" label="Модель станции" placeholder="Модель станции">
              <option value="" />
              {modelCharge.map((option) => (
                <option key={option.code} value={option.label}>
                  {option.label}
                </option>
              ))}
            </RHFSelect>
          </Stack>
        </Grid>
        <Grid item xs={12} md={2}>
          <RHFSelect name="Тип объекта" label="Тип объекта" placeholder="Тип объекта">
            <option value="" />
            {typeObject.map((option) => (
              <option key={option.code} value={option.label}>
                {option.label}
              </option>
            ))}
          </RHFSelect>
        </Grid>

        <Grid item xs={12} md={2}>
          <RHFSelect name="Владелец" label="Владелец" placeholder="Владелец">
            <option value="" />
            {owner.map((option) => (
              <option key={option.code} value={option.label}>
                {option.label}
              </option>
            ))}
          </RHFSelect>
        </Grid>
        <Grid item xs={12} md={2}>
          <RHFSelect name="Период" label="Период" placeholder="Период">
            <option value="" />
            {timePeriod.map((option) => (
              <option key={option.code} value={option.label}>
                {option.label}
              </option>
            ))}
          </RHFSelect>
        </Grid>
      </Grid>
      <Stack alignItems="flex-start" sx={{ mt: 3 }} direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <LoadingButton type='submit' variant="contained">
          Отфильтровать
        </LoadingButton>
        <LoadingButton type="reset" variant="contained">
          Сбросить фильтр
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}

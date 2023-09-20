import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateField, reservation } from "../../store/formSlice/formSlice";

const ReservationForm = () => {

    const dispatch = useDispatch();
    const form = useSelector(state => state.form);

    const handleChange = (field) => (evt) => {
        dispatch(updateField({ field, value: evt.target.value }))
    }

    const master_name = useSelector(state => state.calendar.selectedMaster);
    const day = useSelector(state => state.calendar.selectedDay);
    const time = useSelector(state => state.calendar.selectedTime);
    const id = useSelector(state => state.calendar.idOfSelectedAppointments);

    return (<Formik
        initialValues={form}>
        {({ isSubmitting }) => (
            <Form>
                <div>
                    <lablel htmlFor='name'>Ваше ФИО:</lablel>
                    <Field type="text" id='name' name="name" onChange={handleChange('name')} value={form.name}></Field>
                    <ErrorMessage name='name' component='div'></ErrorMessage>
                </div>
                <div>
                    <lablel htmlFor='phone'>Ваш телефон:</lablel>
                    <Field type="phone" id='phone' name="phone" onChange={handleChange('phone')} value={form.phone}></Field>
                    <ErrorMessage name='phone' component='div'></ErrorMessage>
                </div>
                <div>
                    <lablel htmlFor='master_name'>Ваш мастер:</lablel>
                    <Field type="text" id='master_name' name="master_name" value={master_name}></Field>
                    <ErrorMessage name='master_name' component='div'></ErrorMessage>
                </div>
                <div>
                    <lablel htmlFor='date'>Дата записи:</lablel>
                    <Field type="text" id='date' name="date" value={day}></Field>
                    <ErrorMessage name='date' component='div'></ErrorMessage>
                </div>
                <div>
                    <lablel htmlFor='time'>Время записи:</lablel>
                    <Field type="time" id='time' name="time" value={time}></Field>
                    <ErrorMessage name='time' component='div'></ErrorMessage>
                </div>
                <button onClick ={()=>dispatch(reservation({
                    name: form.name,
                    phone: form.phone,
                    id: id,
                    master_name: master_name,
                    date: day,
                    time: time
                }))} type="submit" disabled={isSubmitting}>
                    Записаться
                </button>
            </Form>
        )}
    </Formik>);

}

export default ReservationForm;
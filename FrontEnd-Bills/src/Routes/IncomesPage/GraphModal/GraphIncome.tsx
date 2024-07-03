import { Box, Modal, Typography } from "@mui/material"
import { LineChart } from "@mui/x-charts";
import { Income } from "../../../interfaces/CategoriesIncome";
import dayjs from "dayjs";
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    minWidth: "30%",
    transform: 'translate(-50%, -50%)',
    bgcolor: 'primary.light',
    border: '2px solid #000',
    boxShadow: 24,
  };

interface ComponentProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    incomes: Income[]
}
const GraphIncome: React.FC<ComponentProps> = ({open, setOpen, incomes}) => {
    const handleClose = () => {
        setOpen(false)
    };
    const orderByDate = (): Income[] => {
        return incomes.sort((a,b) => {
            if (a.date > b.date) {
                return 1;
              }
              if (a.date < b.date) {
                return -1;
              }
              return 0;
        })
    }
    const arrayOfMount = (): number[] => {
        const incomeOrdered = orderByDate()
        const periods = checkYearOrMonthOrDay()
        const noRepeatDate = noRepeatDateArray(xAxisByDate())
        const arrayOfMount: number[] = []
        const acumMount = (format: string) => {
            noRepeatDate.map((date, index) => {
                incomeOrdered.map((income) => {
                    const dateOfIncomeInNumber = Number(dayjs(income.date).format(format))
                    if( dateOfIncomeInNumber === date) {
                        arrayOfMount[index] = arrayOfMount[index]? Number(income.mount) + arrayOfMount[index]: Number(income.mount)
                    }
                })
            })
        }
        if (periods === 'day') {
            acumMount("DD")
        }else if(periods === 'month') {
            acumMount("MM")
        }else {
            acumMount("YYYY")
        }
        if (typeof(arrayOfMount[0]) != 'number') {
            arrayOfMount[0] = 0
        }
        return arrayOfMount
    }
    const noRepeatDateArray = (dates: number[]):number[] => {
        let arrayNoRepeat: number[] = []
        dates.map((date) => {
            (!arrayNoRepeat.includes(date))? 
            arrayNoRepeat.push(date)
            :
            ""
        })
        return arrayNoRepeat
    }
    const xAxisByDate = (): number[] => {
        const periods = checkYearOrMonthOrDay()
        const incomeOrdered = orderByDate()
        if( periods === 'day'){
            let daysIncome = incomeOrdered.map((income) => Number(dayjs(income.date).format("DD")))
            if (daysIncome[0] != 1){
                daysIncome = [1, ...daysIncome]
            }
            return noRepeatDateArray(daysIncome)
        } else if (periods === 'month') {
            let monthIncome = incomeOrdered.map((income) => Number(dayjs(income.date).format("MM")))
            if (monthIncome[0] != 1){
                monthIncome = [1, ...monthIncome]
            }
            return noRepeatDateArray(monthIncome)
        }else {
            return incomeOrdered.map((income) => Number(dayjs(income.date).format("YYYY")))
        }
    }
    const checkYearOrMonthOrDay = (): string =>{
        let output = "day"
        incomes.reduce((prev, value) => {
            const monthPrev = dayjs(prev.date).format("MM")
            const monthValue = dayjs(value.date).format("MM")
            if(monthPrev != monthValue){
                output = "month"
            }
            return value
        },incomes[0])
        incomes.reduce((prev, value) => {
            const yearPrev = dayjs(prev.date).format("YYYY")
            const yearValue = dayjs(value.date).format("YYYY")
            if(yearPrev != yearValue){
                output = "year"
            }
            return value
        },incomes[0])
        return output
    }
    const minXAxis = (): number => {
        const periods = checkYearOrMonthOrDay()
        const incomeOrdered = orderByDate()
        if( periods === 'day'){
            return 1
        } else if (periods === 'month') {
            return 1
        }else {
            const array = incomeOrdered.map((income) => Number(dayjs(income.date).format("YYYY")))
            return array[0]
        }
    }
    return(
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {(checkYearOrMonthOrDay() === 'day')? 
                    <Typography pt={2} textAlign={'center'} color={"secondary.main"} variant="h4">{dayjs(incomes[0].date).format("MMMM")}</Typography>
                    :
                    ""
                }
                {(checkYearOrMonthOrDay() === 'month')? 
                    <Typography pt={2} textAlign={'center'} color={"secondary.main"} variant="h4">{dayjs(incomes[0].date).format("YYYY")}</Typography>
                    :
                    ""
                }
                <LineChart
                xAxis={[{
                    min: minXAxis(),
                    data: xAxisByDate(),
                    label: checkYearOrMonthOrDay()
                 }]}
                series={[
                    {
                    data: arrayOfMount(),
                    label: 'Mount'
                    },
                ]}
                yAxis={[{
                    min: 0
                }]}
                height={300}
                />
            </Box>
        </Modal>
    )
}
export {GraphIncome}
import classNames from 'classnames';
import Button from '~formControls/Button'

function Actions() {

    const listAction = [
        { name: 'Khôi phục hoạt động', clsColor: 'text-[#1672EC]', isDisable: false, value: 0 },
        { name: 'Dừng hoạt động', clsColor: 'text-[#FDB022]', isDisable: false, value: 1 },
        { name: 'Dừng toàn bộ ghế', clsColor: 'text-[#F97066]', isDisable: false, value: 2 },
    ]

    return (
        <div className="flex items-center justify-center p-5 gap-x-3 ">
            {
                listAction.map((action, index) => {
                    const { name, clsColor, isDisable, value } = action;

                    return (
                        <Button
                            key={index}
                            text={name}
                            className={classNames(
                                'flex items-center justify-center w-[164px] py-[10px] px-3 rounded-lg bg-[#EEF2FF] text-sm not-italic font-medium leading-5 cursor-pointer',
                                clsColor
                            )}
                            disabled={isDisable}
                        />
                    )
                })
            }
        </div>
    );
}

export default Actions;
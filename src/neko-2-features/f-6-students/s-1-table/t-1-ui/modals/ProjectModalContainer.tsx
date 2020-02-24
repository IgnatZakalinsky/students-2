import React, {CSSProperties, ReactNode, useState} from 'react';
import Modal from '../../../../f-3-common/c-2-modals/modals-1-ui/Modal';

const ProjectModalContainer: React.FC<{name: ReactNode, style: CSSProperties}> = ({children, name, style}) => {
    const [show, setShow] = useState(false);

    console.log('render ModalContainer');
    return (
        <>
            <button onClick={() => setShow(true)} style={style}>{name}</button>
            <Modal
                enableBackground={true} backgroundOnClick={() => setShow(false)}

                width={300} height={400}
                // modalOnClick={() => setShow(false)}

                show={show}
            >
                {children}
                <button onClick={() => setShow(false)}>Close</button>
            </Modal>
        </>
    );
};

export default ProjectModalContainer;

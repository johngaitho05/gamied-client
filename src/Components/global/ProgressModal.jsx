import React, {useState} from 'react';
import { motion } from 'framer-motion';
import {Button, Modal} from "antd";

const ProgressModal = ({from, to, points, onClose=null}) => {
  const [isOpen, setOpen] = useState(true)
  return (
    <Modal
      className="lg: min-w-[500px]"
      title={`Congratulations!`}
      open={isOpen}
      onCancel={() => {
        setOpen(false)
        if(onClose) onClose()
      }}
      footer={[
        <Button key="submit" type="primary" className="bg-cta" onClick={() => {
          setOpen(false)
          if(onClose) onClose()
        }}>
          OK
        </Button>
      ]}
    >
      <div style={{width: '100%', background: '#e0e0df', borderRadius: '5px', overflow: 'hidden'}}>
        <motion.div
          initial={{width: from}}
          animate={{width: `${to}%`}}
          transition={{duration: 1}}
          style={{height: '20px', background: '#1c30ab'}}
        />
      </div>
      <p className="text-cta font-bold">+ {points} points</p>
    </Modal>
  );
};

export default ProgressModal;

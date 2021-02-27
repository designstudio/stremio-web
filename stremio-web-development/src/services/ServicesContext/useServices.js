// Copyright (C) 2017-2020 Smart code 203358507

const React = require('react');
const ServicesContext = require('./ServicesContext');

const useServices = () => {
    return React.useContext(ServicesContext);
};

module.exports = useServices;
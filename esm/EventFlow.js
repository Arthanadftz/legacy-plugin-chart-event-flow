import _pt from "prop-types";

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import { App as EventFlowApp } from '@data-ui/event-flow';
import { t } from '@superset-ui/core';
export default function EventFlow({
  data,
  initialMinEventCount,
  height = 400,
  width = 400
}) {
  if (data) {
    return /*#__PURE__*/React.createElement(EventFlowApp, {
      width: width,
      height: height,
      data: data,
      initialMinEventCount: initialMinEventCount,
      initialShowControls: false
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      width
    }
  }, /*#__PURE__*/React.createElement("div", null, t('Sorry, there appears to be no data')));
}
EventFlow.propTypes = {
  data: _pt.array.isRequired,
  height: _pt.number.isRequired,
  width: _pt.number.isRequired,
  initialMinEventCount: _pt.number.isRequired
};
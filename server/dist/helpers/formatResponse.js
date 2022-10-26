"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatResponse = void 0;
const formatResponse = (result, isSuccess = true, message = "") => {
    return {
        result,
        isSuccess,
        message,
    };
};
exports.formatResponse = formatResponse;
//# sourceMappingURL=formatResponse.js.map
const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    tree = null;

    root() {
        return this.tree;
    }

    add(data) {
        const node = new Node(data);

        if (!this.tree) {
            this.tree = node;
        } else {
            let root = this.tree;

            while (root) {
                if (root.data < data) {
                    if (root.right) {
                        root = root.right;
                    } else {
                        root.right = node;
                        break;
                    }
                } else {
                    if (root.left) {
                        root = root.left;
                    } else {
                        root.left = node;
                        break;
                    }
                }
            }
        }
    }

    has(data) {
        let root = this.tree;

        while (root) {
            if (root.data === data) {
                return true;
            }

            if (root.data < data) {
                root = root.right;
            } else {
                root = root.left;
            }
        }

        return false;
    }

    find(data) {
        let root = this.tree;

        while (root) {
            if (root.data === data) {
                return root;
            }

            if (root.data < data) {
                root = root.right;
            } else {
                root = root.left;
            }
        }

        return null;
    }

    remove(data) {
        let root = this.tree;

        if (root.data === data) {
            const deleteNode = root;

            if (root.right) {
                this.min(root.right, true).left = deleteNode.left;
                this.tree = root.right;
                return;
            }

            if (root.left) {
                this.max(root.left, true).right = deleteNode.right;
                this.tree = root.left;
                return;
            }

            this.tree = null;
            return;
        }

        while (root) {
            if (root.left?.data === data) {
                const deleteNode = root.left;
                if (deleteNode.right) {
                    root.left = deleteNode.right;
                    this.min(root.left, true).left = deleteNode.left;
                } else {
                    root.left = deleteNode.left;
                }
                break;
            }

            if (root.right?.data === data) {
                const deleteNode = root.right;
                if (deleteNode.left) {
                    root.right = deleteNode.left;
                    this.max(root.right, true).right = deleteNode.right;
                } else {
                    root.right = deleteNode.right;
                }
                break;
            }

            if (root.data < data) {
                root = root.right;
            } else {
                root = root.left;
            }
        }
    }

    min(certainNode, returnNode) {
        let root = certainNode || this.tree;

        while (root) {
            if (!root.left) {
                return returnNode ? root : root.data;
            } else {
                root = root.left;
            }
        }

        return null;
    }

    max(certainNode, returnNode) {
        let root = certainNode || this.tree;

        while (root) {
            if (!root.right) {
                return returnNode ? root : root.data;
            } else {
                root = root.right;
            }
        }

        return null;
    }
}

module.exports = {
    BinarySearchTree
};
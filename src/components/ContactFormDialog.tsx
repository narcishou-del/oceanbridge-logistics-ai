import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormDialogProps {
  children: React.ReactNode;
  title?: string;
}

const ContactFormDialog = ({ children, title = "方案咨询" }: ContactFormDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    description: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "请填写完整信息",
        description: "联系人姓名和电话为必填项",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // 组装消息内容
      const content = `收到数字化产品咨询服务单，姓名：${formData.name}，电话：${formData.phone}，需求描述：${formData.description || "无"}。`;

      // 调用API
      const response = await fetch('/hm/message/message/sendMessage', {
        method: 'POST',
        headers: {
          'sessionId': '20260116aUSyuqBcOIvMvMl',
          'source': 'lanmeng-2.0',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          employeeIdList: [1973],
          qywxFlag: 1,
          content: content,
          title: "数字化产品咨询",
          saveLogFlag: 1,
          qywxExtra: {
            msgType: "text"
          }
        }),
      });

      if (!response.ok) {
        throw new Error('提交失败');
      }

      toast({
        title: "提交成功",
        description: "我们会尽快与您联系！",
      });

      setFormData({ name: "", phone: "", description: "" });
      setOpen(false);
    } catch (error) {
      console.error('提交失败:', error);
      toast({
        title: "提交失败",
        description: "请稍后重试或联系我们的客服",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white border-blue-100 shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">{title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            请填写您的联系方式，我们将尽快与您取得联系
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              联系人姓名 <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              placeholder="请输入您的姓名"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background border-border focus:border-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">
              电话 <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="请输入您的联系电话"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-background border-border focus:border-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description" className="text-foreground">
              需求描述
            </Label>
            <Textarea
              id="description"
              placeholder="请简要描述您的需求..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="bg-background border-border focus:border-primary min-h-[100px] resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-ocean hover:opacity-90 text-primary-foreground"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                提交中...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                提交咨询
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;

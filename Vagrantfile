Vagrant.configure("2") do |config|
  config.vm.box = "geerlingguy/ubuntu2004"
  config.vm.provider "virtualbox" do |vb|
      vb.memory = "2048"
      vb.cpus = 2
      vb.customize ['modifyvm', :id, '--nested-hw-virt', 'on']
  end

  config.vm.provision "ansible" do |ansible|
      ansible.playbook = "playbook.yml"
  end

  config.vm.network "forwarded_port", guest: 3000, host: 3000 

end